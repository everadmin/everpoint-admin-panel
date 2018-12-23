import React, { PureComponent } from "react";
import Responsive from "react-responsive";

import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { getRouteByLocation } from "../../routes";
import { AdditionalMenu } from "../../components/AdditionalMenu/AdditionalMenu";
import { PortfolioSlide } from "../../components/PortfolioSlide/PortfolioSlide";
import styles from "../../styles/portfolio";

class Portfolio extends PureComponent {
  render() {
    const { location } = this.props;
    const currentRoute = getRouteByLocation(location);

    return (
      <MainLayoutConsumer>
        {({ selectedSectionIndex, sections, onSectionChange, sectionDirection }) => {
          const section = sections[selectedSectionIndex];

          return (
            <MainAnimation
              {...this.props}
              willChangeLeftSideClassName={styles.portfolioLeftSide}
              leftSide={
                <Responsive minWidth={577}>
                  <AdditionalMenu
                    selectedId={section && section.id}
                    onSectionChange={onSectionChange}
                    leftSide
                    additionalMenu={currentRoute.additionalMenu}
                    isOpen={true}
                  />
                </Responsive>
              }
              containerClassName={styles.portfolioContainer}
              rightSide={
                <PortfolioSlide
                  sectionDirection={sectionDirection}
                  sections={sections}
                  selectedSectionIndex={selectedSectionIndex}
                  onSectionChange={onSectionChange}
                  {...section}
                />
              }
            />
          );
        }}
      </MainLayoutConsumer>
    );
  }
}

export default Portfolio;
