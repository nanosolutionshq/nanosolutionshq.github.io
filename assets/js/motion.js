(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (
    reducedMotion.matches ||
    !("IntersectionObserver" in window) ||
    !("animate" in Element.prototype)
  ) {
    return;
  }

  const targets = Array.from(document.querySelectorAll("[data-reveal]"));

  if (!targets.length) {
    return;
  }

  const activeAnimations = new Set();
  const revealedTargets = new WeakSet();
  const mobile = window.innerWidth < 700;
  const verticalDistance = mobile ? 10 : 22;
  const horizontalDistance = mobile ? 0 : 28;
  const scaleStart = mobile ? 0.98 : 0.96;
  const duration = mobile ? 540 : 620;

  const startTransform = (target) => {
    switch (target.dataset.reveal) {
      case "left":
        return mobile
          ? `translate3d(0, ${verticalDistance}px, 0)`
          : `translate3d(-${horizontalDistance}px, 0, 0)`;
      case "right":
        return mobile
          ? `translate3d(0, ${verticalDistance}px, 0)`
          : `translate3d(${horizontalDistance}px, 0, 0)`;
      case "scale":
        return `translate3d(0, ${mobile ? 10 : 18}px, 0) scale(${scaleStart})`;
      default:
        return `translate3d(0, ${verticalDistance}px, 0)`;
    }
  };

  const reveal = (target) => {
    if (revealedTargets.has(target)) {
      return;
    }

    revealedTargets.add(target);
    const delay = Math.min(Number(target.dataset.revealDelay) || 0, 220);
    const animation = target.animate(
      [
        {
          opacity: 0.05,
          transform: startTransform(target)
        },
        { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" }
      ],
      {
        duration,
        delay,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "both"
      }
    );

    activeAnimations.add(animation);
    animation.onfinish = () => {
      activeAnimations.delete(animation);
      animation.cancel();
    };
    animation.oncancel = () => activeAnimations.delete(animation);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        observer.unobserve(entry.target);
        reveal(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
  );

  targets.forEach((target) => observer.observe(target));

  document.addEventListener("focusin", (event) => {
    const target = event.target.closest?.("[data-reveal]");

    if (!target) {
      return;
    }

    observer.unobserve(target);
    revealedTargets.add(target);
    target.getAnimations().forEach((animation) => animation.finish());
  });

  const stopMotion = (event) => {
    if (!event.matches) {
      return;
    }

    observer.disconnect();
    activeAnimations.forEach((animation) => animation.finish());
  };

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", stopMotion);
  } else {
    reducedMotion.addListener(stopMotion);
  }
})();
