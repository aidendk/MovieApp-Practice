import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'tamagui';

import { Title } from '~/tamagui.config';

const Home = () => {
  return (
    <View>
      <Title>Home</Title>
      <Card>
        <Card.Header />
        <Text>Header</Text>
        <Card.Footer />
        {/* any other components */}
        <Card.Background />
      </Card>
    </View>
  );
};

export default Home;
