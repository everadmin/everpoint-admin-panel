import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

import { ScreenshotTransitionGroup } from "./styles";
import { getScreenshot } from "./getScreenshot";

export class Screenshot extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    screenshot: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    text: PropTypes.string,
    direction: PropTypes.number,
  };

  render() {
    const { id, screenshot, text } = this.props;

    return (
      <ScreenshotTransitionGroup appear>
        <Transition
          key={`${id}-screenshot`}
          timeout={{
            enter: 100,
            exit: 200,
          }}
        >
          {status => getScreenshot({ ...this.props, status, screenshot, text, id })}
        </Transition>
      </ScreenshotTransitionGroup>
    );
  }
}
