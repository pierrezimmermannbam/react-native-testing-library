import React from 'react';
import { Pressable, View } from 'react-native';
import { render, screen, userEvent } from '../pure';

jest.useFakeTimers();

describe('userEvent.press', () => {
  test('calls onPress prop of touchable', () => {
    const mockOnPress = jest.fn();

    render(<Pressable onPress={mockOnPress} testID="pressable" />);
    userEvent.press(screen.getByTestId('pressable'));

    expect(mockOnPress).toHaveBeenCalled();
  });

  test('does not call press when pressable is disabled', () => {
    const mockOnPress = jest.fn();

    render(<Pressable disabled onPress={mockOnPress} testID="pressable" />);
    userEvent.press(screen.getByTestId('pressable'));

    expect(mockOnPress).not.toHaveBeenCalled();
  });

  test('does not call press when pointer events is none', () => {
    const mockOnPress = jest.fn();

    render(
      <Pressable
        pointerEvents="none"
        onPress={mockOnPress}
        testID="pressable"
      />
    );
    userEvent.press(screen.getByTestId('pressable'));

    expect(mockOnPress).not.toHaveBeenCalled();
  });

  test('does not call press when pointer events is box-none', () => {
    const mockOnPress = jest.fn();

    render(
      <Pressable
        pointerEvents="box-none"
        onPress={mockOnPress}
        testID="pressable"
      />
    );
    userEvent.press(screen.getByTestId('pressable'));

    expect(mockOnPress).not.toHaveBeenCalled();
  });

  test('does not call press when parent has pointer events box-only', () => {
    const mockOnPress = jest.fn();

    render(
      <View pointerEvents="box-only">
        <Pressable onPress={mockOnPress} testID="pressable" />
      </View>
    );
    userEvent.press(screen.getByTestId('pressable'));

    expect(mockOnPress).not.toHaveBeenCalled();
  });

  test('calls press when pressable has pointer events box-only', () => {
    const mockOnPress = jest.fn();

    render(
      <Pressable
        onPress={mockOnPress}
        pointerEvents="box-only"
        testID="pressable"
      />
    );

    userEvent.press(screen.getByTestId('pressable'));

    expect(mockOnPress).toHaveBeenCalled();
  });
});
