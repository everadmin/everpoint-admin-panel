import React, { Component } from "react";
import PropTypes from "prop-types";

import { getElementWidthAndHeight, isElementInViewport } from "../../../utils/dom";
import { getLongreadNavbarHeight } from "../../../components/LongreadNavbar/LongreadNavbar";
import { ScrollbarConsumer } from "../../../components/ScrollbarProvider/ScrollbarProvider";

import { Svg, FirstLine, SecondLine, LightBulb, Filament } from "./styles";

export class SeparateBase extends Component {
  static propTypes = {
    scrollTop: PropTypes.number,
  };

  state = {
    width: 0,
  };

  componentDidUpdate({ scrollTop: prevScrollTop }, prevState) {
    const { scrollTop, elementYPosition } = this.props;
    const svg = this.svg;

    if (prevScrollTop !== scrollTop && svg) {
      const sum = 40 * 2 + 269 * 2;
      const percent = elementYPosition({ element: svg, percent: true });
      const width = (sum * percent) / 100;

      this.setState({ width: Math.round(width) });
    }
  }

  onRef = ref => {
    if (ref) {
      this.svg = ref;
    }
  };

  render() {
    const { width } = this.state;

    return (
      <Svg innerRef={this.onRef}>
        <FirstLine height={Math.min(width, 40)} width={width > 40 ? Math.min(width, 269) : 0} />
        <SecondLine
          width={width > 309 ? Math.min(width - 309, 578) : 0}
          height={width > 578 ? Math.min(width - 578, 618) : 0}
        />
        <LightBulb />
        <Filament />
      </Svg>
    );
  }
}

export const Separate = props => (
  <ScrollbarConsumer>
    {({ scrollTop, elementYPosition }) => (
      <SeparateBase scrollTop={scrollTop} elementYPosition={elementYPosition} {...props} />
    )}
  </ScrollbarConsumer>
);
