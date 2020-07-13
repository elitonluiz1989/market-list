import React from 'react';
import { ModalBaseProps } from 'react-native';
// AppButton
interface IAppIcon {
  name: string,
  color?: string,
  size?: number
}

interface IAppButtonProps {
  action: TAppButtonAction,
  styles: any[],
  children?: React.ReactNode
  icon?: IAppIcon,
  text?: string
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

interface IAppModalProps {
  animation?: ModalBaseProps.animationType,
  transparent?: boolean,
  visible: boolean,
  title: string,
  children?: React.ReactNode,
  actions?: IAppModalActions
}

export {
  IAppIcon,
  IAppButtonProps,
  IAppModalProps,
  IAppModalAction,
  IAppModalActions
}