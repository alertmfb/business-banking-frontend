import { ReactElement, ReactNode } from "react";

export interface Modal {
  id?: string | number;
  close?: () => void;
}
export interface Layout {
  children: ReactNode;
  loginBtn: boolean;
  terms: boolean;
}
export interface NavbarProps {
  title: string;
  subtitle: string;
}

export interface ProgressStepsProps {
  id: number;
  title: string;
}
export interface AddProps {
  setActiveTab: any;
}

export interface IFormInputProps {
  label?: string;
  placeholder?: string;
  id: string;
  name?: string;
  shortP?: string;
  error?: string | undefined;
  defaultValue?: string | number;
  type?: React.HTMLInputTypeAttribute | "textarea" | "select";
  inputClassName?: string;
  className?: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  icon?: JSX.Element | string;
  required?: boolean;
  disabled?: boolean;
  selectOptions?: any[];
  valuePropertyName?: string;
  keyPropertyName?: string;
  itemPropertyName?: string;
}

export interface DashboardLayoutProps {
  children: ReactNode;
}
export interface RouteProps {
  path: string;
  name: string;
  element: ReactElement;
}
export interface OTPProps {
  page: string;
  inputCount: number;
  title: string;
  paragraph: ReactElement;
  resend?: boolean;
}

export interface KYCPageProps {
  setCurrentStep: any;
}

export interface IDOption {
  icon: any;
  title: string;
  iconBg: string;
  shortCode: string;
}
export interface DataItem {
  createdAt: string;
}

export interface AnalyticsChartProps {
  data: { createdAt: string }[];
}

export interface GraphData {
  name: string;
  income: number;
}
