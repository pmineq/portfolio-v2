export const EMAIL_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || '',
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '',
} as const;

export const CONTACT_INFO = {
  phone: '+821031938441',
  phoneDisplay: '+82 10-3193-8441',
  email: 'pmineq.12@gmail.com',
} as const;

export const VALIDATION_MESSAGES = {
  name: '성함을 입력해 주세요.',
  email: '메일 주소를 입력해 주세요.',
  message: '내용을 입력해 주세요.',
  success: '성공적으로 이메일이 전송되었습니다.',
  error: '이메일 전송이 실패되었습니다.',
} as const;
