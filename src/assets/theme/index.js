const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848a"
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222222"
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.1s ease-in;
      &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
      }
    `
  }
}

export default theme
