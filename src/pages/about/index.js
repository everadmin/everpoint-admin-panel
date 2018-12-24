import React from "react";

import { BackendComponent } from "../../components/Backend/Backend";
import { Bullets } from "../../components/Bullets/Bullets";
import { News } from "../../components/Cards/News";
import { MainAnimation } from "../../components/MainAnimation/MainAnimation";
import { H2, Link } from "../../components/Atoms/Atoms";
import { MainLayoutConsumer } from "../../components/MainLayoutProvider/MainLayoutProvider";
import { ConstellationPoints } from "../../components/ConstellationPoints/ConstellationPoints";
import styles, { NewsContainer } from "../../styles/about";

export const About = props => {
  return (
    <MainLayoutConsumer>
      {({ selectedSectionIndex, sections, onSectionChange, sectionDirection, isSwipeEvent }) => {
        const section = sections[selectedSectionIndex];

        return (
          <MainAnimation
            {...props}
            leftSide={
              <>
                <H2 as="h1">СМИ о нас</H2>
                <Link>Все комментарии</Link>
              </>
            }
            containerClassName={styles.aboutContainer}
            rightSide={
              <NewsContainer>
                <ConstellationPoints selectedSectionIndex={selectedSectionIndex} />
                <BackendComponent sections={sections} selectedSectionIndex={selectedSectionIndex} />
                <News
                  isSwipeEvent={isSwipeEvent}
                  onSectionChange={onSectionChange}
                  direction={sectionDirection}
                  {...section}
                />
                <Bullets
                  className={styles.newBullets}
                  sections={sections}
                  selectedSectionIndex={selectedSectionIndex}
                />
              </NewsContainer>
            }
          />
        );
      }}
    </MainLayoutConsumer>
  );
};

export default About;
