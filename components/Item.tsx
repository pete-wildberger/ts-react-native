import React from 'React';
import { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface State {}
interface Props {}
export class Item extends React.Component<State, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  buttonPressed = () => {
    console.log('Pressed');
  };
  render() {
    return (
      <View style={styles.view}>
        <Text>text</Text>
        <Button title="Press Me" onPress={this.buttonPressed} />
      </View>
    );
  }
}
// styles

const styles = StyleSheet.create({
  root: {},
  buttons: {},
  button: {},
  view: {}
});
