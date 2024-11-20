/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'Color styles': {
          'Brand 品牌': {
            'Brand1-Light': 'rgb(242, 243, 255)',
            'Brand2-Focus': 'rgb(217, 225, 255)',
            'Brand3-Disabled': 'rgb(181, 199, 255)',
            'Brand6-Hover': 'rgb(54, 110, 244)',
            'Brand7-Normal': 'rgb(0, 82, 217)',
            'Brand8-Click': 'rgb(0, 60, 171)'
          },
          'Error 错误': {
            'Error1-Light': 'rgb(255, 240, 237)',
            'Error2-Focus': 'rgb(255, 216, 210)',
            'Error3-Disabled': 'rgb(255, 185, 176)',
            'Error5-Hover': 'rgb(246, 104, 93)',
            'Error6-Normal': 'rgb(213, 73, 65)',
            'Error7-Click': 'rgb(173, 53, 47)'
          },
          'Gray 中性': {
            Gray14: 'rgb(24, 24, 24)',
            Gray11: 'rgb(56, 56, 56)',
            Gray12: 'rgb(44, 44, 44)',
            Gray13: 'rgb(36, 36, 36)',
            Gray2: 'rgb(238, 238, 238)',
            'Gray3-分割线': 'rgb(231, 231, 231)',
            'Gray4-边框': 'rgb(220, 220, 220)',
            Gray5: 'rgb(197, 197, 197)',
            Gray6: 'rgb(166, 166, 166)',
            Gray7: 'rgb(139, 139, 139)',
            Gray8: 'rgb(119, 119, 119)',
            Gray9: 'rgb(94, 94, 94)',
            White: 'rgb(255, 255, 255)',
            Gray1: 'rgb(243, 243, 243)',
            Gray10: 'rgb(75, 75, 75)'
          },
          'Success 成功': {
            'Success3-Disabled': 'rgb(146, 218, 178)',
            'Success1-Light': 'rgb(227, 249, 233)',
            'Success2-Focus': 'rgb(198, 243, 215)',
            'Success4-Hover': 'rgb(86, 192, 141)',
            'Success5-Normal': 'rgb(43, 164, 113)',
            'Success6-Click': 'rgb(0, 136, 88)'
          },
          'Text&Icon': {
            'Font Gy1 90%-primary': 'rgba(0, 0, 0, 0.9)',
            'Font Gy2 60%-secondary': 'rgba(0, 0, 0, 0.6)',
            'Font Gy3 40%-placeholder': 'rgba(0, 0, 0, 0.4)',
            'Font Gy4 26%-disabled': 'rgba(0, 0, 0, 0.26)',
            'Font Wh1 90%-anti': 'rgba(255, 255, 255, 0.9)',
            'Font Wh2 55%': 'rgba(255, 255, 255, 0.55)',
            'Font Wh3 35%': 'rgba(255, 255, 255, 0.35)',
            'Font Wh4 22%': 'rgba(255, 255, 255, 0.22)'
          },
          'Warning 警告': {
            'Warning1-Light': 'rgb(255, 241, 233)',
            'Warning2-Focus': 'rgb(255, 217, 194)',
            'Warning3-Disabled': 'rgb(255, 185, 140)',
            'Warning4-Hover': 'rgb(250, 149, 80)',
            'Warning5-Normal': 'rgb(227, 115, 24)',
            'Warning6-Click': 'rgb(190, 90, 0)'
          }
        }
      },
      dropShadow: {
        'Effect styles-Focus Shadow-Default 默认': '0px 0px 0px rgb(217, 225, 255)',
        'Effect styles-Focus Shadow-Error 错误': '0px 0px 0px rgb(255, 216, 210)',
        'Effect styles-Focus Shadow-Success 成功': '0px 0px 0px rgb(198, 243, 215)',
        'Effect styles-Focus Shadow-Warning 警告': '0px 0px 0px rgb(255, 217, 194)',
        'Effect styles-Shadow-Shadow-1 基础投影': '0px 2px 4px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.08), 0px 1px 10px rgba(0, 0, 0, 0.05)',
        'Effect styles-Shadow-Shadow-2 中层投影': '0px 5px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.06), 0px 3px 14px rgba(0, 0, 0, 0.05)',
        'Effect styles-Shadow-Shadow-3 上层投影': '0px 8px 10px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.04), 0px 6px 30px rgba(0, 0, 0, 0.05)'
      },
      fontFamily: {
        'Text styles-Display-Large': 'PingFang SC',
        'Text styles-Display-Medium': 'PingFang SC',
        'Text styles-Headline-Large': 'PingFang SC',
        'Text styles-Headline-Medium': 'PingFang SC',
        'Text styles-Headline-Small': 'PingFang SC',
        'Text styles-Link-Large': 'PingFang SC',
        'Text styles-Link-Medium': 'PingFang SC',
        'Text styles-Link-Small': 'PingFang SC',
        'Text styles-Mark-Medium': 'PingFang SC',
        'Text styles-Mark-Small': 'PingFang SC',
        'Text styles-Title-ExtraLarge': 'PingFang SC',
        'Text styles-Title-Large': 'PingFang SC',
        'Text styles-Title-Medium': 'PingFang SC',
        'Text styles-Title-Small': 'PingFang SC',
        'Text styles-Body-Large': 'PingFang SC',
        'Text styles-Body-Medium': 'PingFang SC',
        'Text styles-Body-Small': 'PingFang SC'
      },
      fontWeight: {
        'Text styles-Display-Large': 'bold',
        'Text styles-Display-Medium': 'bold',
        'Text styles-Headline-Large': 'bold',
        'Text styles-Headline-Medium': 'bold',
        'Text styles-Headline-Small': 'bold',
        'Text styles-Link-Large': 'regular',
        'Text styles-Link-Medium': 'regular',
        'Text styles-Link-Small': 'regular',
        'Text styles-Mark-Medium': 'bold',
        'Text styles-Mark-Small': 'bold',
        'Text styles-Title-ExtraLarge': 'bold',
        'Text styles-Title-Large': 'bold',
        'Text styles-Title-Medium': 'bold',
        'Text styles-Title-Small': 'bold',
        'Text styles-Body-Large': 'regular',
        'Text styles-Body-Medium': 'regular',
        'Text styles-Body-Small': 'regular'
      },
      textIndent: {
        'Text styles-Display-Large': '0px',
        'Text styles-Display-Medium': '0px',
        'Text styles-Headline-Large': '0px',
        'Text styles-Headline-Medium': '0px',
        'Text styles-Headline-Small': '0px',
        'Text styles-Link-Large': '0px',
        'Text styles-Link-Medium': '0px',
        'Text styles-Link-Small': '0px',
        'Text styles-Mark-Medium': '0px',
        'Text styles-Mark-Small': '0px',
        'Text styles-Title-ExtraLarge': '0px',
        'Text styles-Title-Large': '0px',
        'Text styles-Title-Medium': '0px',
        'Text styles-Title-Small': '0px',
        'Text styles-Body-Large': '0px',
        'Text styles-Body-Medium': '0px',
        'Text styles-Body-Small': '0px'
      },
      fontSize: {
        'Text styles-Display-Large': '64px',
        'Text styles-Display-Medium': '48px',
        'Text styles-Headline-Large': '36px',
        'Text styles-Headline-Medium': '28px',
        'Text styles-Headline-Small': '24px',
        'Text styles-Link-Large': '16px',
        'Text styles-Link-Medium': '14px',
        'Text styles-Link-Small': '12px',
        'Text styles-Mark-Medium': '14px',
        'Text styles-Mark-Small': '12px',
        'Text styles-Title-ExtraLarge': '20px',
        'Text styles-Title-Large': '18px',
        'Text styles-Title-Medium': '16px',
        'Text styles-Title-Small': '14px',
        'Text styles-Body-Large': '16px',
        'Text styles-Body-Medium': '14px',
        'Text styles-Body-Small': '12px'
      },
      lineHeight: {
        'Text styles-Display-Large': '72px',
        'Text styles-Display-Medium': '56px',
        'Text styles-Headline-Large': '44px',
        'Text styles-Headline-Medium': '36px',
        'Text styles-Headline-Small': '32px',
        'Text styles-Link-Large': '24px',
        'Text styles-Link-Medium': '22px',
        'Text styles-Link-Small': '20px',
        'Text styles-Mark-Medium': '22px',
        'Text styles-Mark-Small': '20px',
        'Text styles-Title-ExtraLarge': '28px',
        'Text styles-Title-Large': '26px',
        'Text styles-Title-Medium': '24px',
        'Text styles-Title-Small': '22px',
        'Text styles-Body-Large': '24px',
        'Text styles-Body-Medium': '22px',
        'Text styles-Body-Small': '20px'
      },
      letterSpacing: {
        'Text styles-Display-Large': '0%',
        'Text styles-Display-Medium': '0%',
        'Text styles-Headline-Large': '0%',
        'Text styles-Headline-Medium': '0%',
        'Text styles-Headline-Small': '0%',
        'Text styles-Link-Large': '0%',
        'Text styles-Link-Medium': '0%',
        'Text styles-Link-Small': '0%',
        'Text styles-Mark-Medium': '0%',
        'Text styles-Mark-Small': '0%',
        'Text styles-Title-ExtraLarge': '0%',
        'Text styles-Title-Large': '0%',
        'Text styles-Title-Medium': '0%',
        'Text styles-Title-Small': '0%',
        'Text styles-Body-Large': '0%',
        'Text styles-Body-Medium': '0%',
        'Text styles-Body-Small': '0%'
      }
    }
  }
}