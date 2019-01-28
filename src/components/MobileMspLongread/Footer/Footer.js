import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { IosStoreLink, AndroidStoreLink } from "../../../components/StoreLinks/StoreLinks";
import { Section, Article, H3, Paragraph } from "../../../components/LongreadAtoms/Longread";
import { halfPhone, phoneRight } from "../images";

import { FooterContainer, Store, Mobiles, LeftSide, RightSide } from "./styles";

export class Footer extends PureComponent {
  static propTypes = {
    ratio: PropTypes.string,
  };

  render() {
    const { ratio } = this.props;

    return (
      <FooterContainer>
        <Article>
          <Paragraph small>
            Приложения «Бизнес-навигатор МСП» и «Навигатор МСП. Меры поддержки» помогают и
            начинающим, и опытным предпринимателям. Каждый клик по экрану смартфона приближает
            пользователя к осуществлению задуманного. Оба приложения можно бесплатно скачать в
            AppStore и GooglePlay.
          </Paragraph>
        </Article>
        <Mobiles>
          <LeftSide>
            <Article>
              <H3>Бизнес-навигатор МСП</H3>
              <Store>
                <IosStoreLink />
                <AndroidStoreLink />
              </Store>
              <img src={halfPhone[ratio]} alt="phone-left" />
            </Article>
          </LeftSide>
          <RightSide>
            <Article>
              <H3>НавигаторМСП. Меры поддержки</H3>
              <Store>
                <IosStoreLink />
                <AndroidStoreLink />
              </Store>
              <img src={phoneRight[ratio]} alt="phone-right" />
            </Article>
          </RightSide>
        </Mobiles>
      </FooterContainer>
    );
  }
}
