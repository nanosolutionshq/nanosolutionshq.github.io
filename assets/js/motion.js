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
  const distance = window.innerWidth < 700 ? 6 : 12;

  const reveal = (target) => {
    const delay = Math.min(Number(target.dataset.revealDelay) || 0, 180);
    const scaled = target.dataset.reveal === "scale";
    const animation = target.animate(
      [
        {
          opacity: 0,
          transform: `translate3d(0, ${distance}px, 0)${scaled ? " scale(0.992)" : ""}`
        },
        { opacity: 1, transform: "translate3d(0, 0, 0) scale(1)" }
      ],
      {
        duration: 460,
        delay,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
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
    { rootMargin: "0px 0px 96px 0px", threshold: 0.01 }
  );

  targets.forEach((target) => observer.observe(target));

  document.addEventListener("focusin", (event) => {
    const target = event.target.closest?.("[data-reveal]");
    target?.getAnimations().forEach((animation) => animation.finish());
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
