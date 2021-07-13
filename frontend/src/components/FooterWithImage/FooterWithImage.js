import React from 'react';
import { Image, View } from '@react-pdf/renderer';

import footer from '../../footer.png';
const FooterWithImage = () => {
  return (
    <View style={{ marginTop: 5 }}>
      <Image src={footer} />
    </View>
  );
};

export default FooterWithImage;
