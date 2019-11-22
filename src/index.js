const directive = {
    bind: function (el, binding, vnode) {
        let breakpoints = binding.arg && typeof binding.arg === 'object' ? binding.arg : {};
        let modifiers = binding.modifiers ? binding.modifiers : {};

        let smBreakPoint = !breakpoints.sm ? 640 : breakpoints.sm;
        let mdBreakPoint = !breakpoints.md ? 768 : breakpoints.md;
        let lgBreakPoint = !breakpoints.lg ? 1024 : breakpoints.lg;
        let xlBreakPoint = !breakpoints.xl ? 1280 : breakpoints.xl;

        let smModifier = modifiers.sm;
        let mdModifier = modifiers.md;
        let lgModifier = modifiers.lg;
        let xlModifier = modifiers.xl;

        el.addEventListener('click', event => {
            if (!smModifier && !mdModifier && !lgModifier && !xlModifier) {
                return binding.value();
            }

            if (smModifier && window.innerWidth <= smBreakPoint) {
                return binding.value();
            }

            if (mdModifier && window.innerWidth <= mdBreakPoint) {
                return binding.value();
            }

            if (lgModifier && window.innerWidth <= lgBreakPoint) {
                return binding.value();
            }

            if (xlModifier && window.innerWidth <= xlBreakPoint) {
                return binding.value();
            }
        });
    },
    unbind: function(el) {
        document.removeEventListener('click', el);
    }
};

export { directive as default };
