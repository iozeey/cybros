const particlesConfig = {
  preset: 'links',
  particles: {
    number: {
      value: 40,
      density: {
        enable: false,
      },
    },
    size: {
      value: 1,
      random: false,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: true,
    },
    move: {
      random: true,
      speed: 0.5,
      direction: 'top',
      out_mode: 'out',
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'bubble',
      },
      onclick: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 400,
        duration: 4,
      },
    },
  },
};

export default particlesConfig;
