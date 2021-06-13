import React, { Component } from "react";
import { StyledTooltip } from "./StyledTooltip";

class Tooltip extends Component {
  state = { text: "Method", top: 100, left: 100, isVisible: false };
  componentDidMount() {
    document.addEventListener("mouseover", this.handleMouseOver);
  }
  componentWillUnmount() {
    document.removeEventListener("mouseover", this.handleMouseOver);
  }
  handleMouseOver = (event) => {
    if (!event) return;
    const { target } = event;
    const closestParent = target?.dataset?.tooltip
      ? target
      : target?.closest("[data-tooltip]") || null;
    if (!closestParent) return this.setState({ isVisible: false });
    const { top, left } = closestParent.getBoundingClientRect();
    const { scrollY, scrollX } = window;

    this.setState({
      isVisible: true,
      text: closestParent.dataset.tooltip,
      top: scrollY + top + 10,
      left: scrollX + left - 110,
    });
  };

  render() {
    const { text, top, left, isVisible } = this.state;
    if (!isVisible) return null;
    return (
      <StyledTooltip className="Tooltip" style={{ top, left, isVisible }}>
        {text}
      </StyledTooltip>
    );
  }
}
export default Tooltip;
