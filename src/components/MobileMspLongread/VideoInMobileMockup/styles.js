import styled from "astroturf";

export const Container = styled("div")`
  flex-shrink: 0;
  position: relative;
  z-index: 8;
  video {
    z-index: -1;
    border-radius: 0.2857rem;
    top: 4.4%;
    right: 8.5%;
    position: absolute;
    max-height: 80vh;
    max-height: calc(var(--vh, 1vh) * 80);
  }
  @media (max-width: 991px) {
    video {
      top: 4%;
      right: 8%;
      max-width: 76%;
    }
  }
  @media (max-width: 767px) and (orientation: landscape) {
    max-height: 74vh;
    max-height: calc(var(--vh, 1vh) * 74);
  }
  @media (max-width: 767px) and (orientation: portrait) {
    margin-right: 1rem;
  }
`;

export const MockUp = styled("img")`
  position: relative;
  width: auto;
  height: 100%;
  max-height: 93.5vh;
  max-height: calc(var(--vh, 1vh) * 93.5);
  @media (max-width: 991px) {
    max-width: 18.8571rem;
    height: auto;
  }
  @media (max-width: 767px) and (orientation: landscape) {
    max-height: 87.5vh;
    max-height: calc(var(--vh, 1vh) * 87.5);
  }

  @media (max-width: 767px) and (orientation: portrait) {
    max-width: 13.4rem;
  }
`;