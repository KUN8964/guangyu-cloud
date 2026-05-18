/** 认证相关类型 */

export interface User {
  phone: string;
  /** 截断显示的脱敏手机号 */
  maskedPhone: string;
  /** 登录时间戳 */
  loginAt: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

/** 模拟验证码（6位数字） */
export interface SmsCode {
  code: string;
  expiresAt: number;
  /** 绑定手机号 */
  phone: string;
}
