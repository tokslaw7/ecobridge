let getImage = (location) => {
    if (!location) {
        return require(`../assets/img/EcoBridge_logo.png`);
    } else {
        return require(`../assets/img/${location}`);
    }
  };

  export default getImage