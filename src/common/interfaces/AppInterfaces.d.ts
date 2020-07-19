import React from 'react';
import { ModalBaseProps, ViewStyle } from 'react-native';
import { TOnLayout } from './Types';

// AppButton
interface IAppIcon {
  name: string,
  style?: string,
  color?: string,
  size?: number
}

interface IAppButtonProps {
  action: TAppButtonAction,
  styles?: any[],
  disabled?: boolean,
  children?: React.ReactNode
  icon?: IAppIcon,
  text?: string,
  onLayout?: TOnLayout
}

// AppModal
interface IAppModalAction {
  title?: string,
  action: (params: any) => void
}

interface IAppModalActions {
  close?: IAppModalAction,
  submit?: IAppModalAction
}

interface IAppModalStyles {
  modal?: ViewStyle[]
  modalBox?: ViewStyle[],
  modalHeader?: ViewStyle[]
}

interface IAppModalProps {
  animation?: ModalBaseProps.animationType,
  transparent?: boolean,
  visible: boolean,
  title: string,
  children?: React.ReactNode,
  actions?: IAppModalActions,
  styles?: IAppModalStyles;
}

export {
  IAppIcon,
  IAppButtonProps,
  IAppModalProps,
  IAppModalAction,
  IAppModalActions,
  IAppModalStyles
}