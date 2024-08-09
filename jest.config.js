module.exports = {
  // 指定根目录
  roots: ['<rootDir>/source'],

  // 匹配测试文件的模式
  testMatch: [
    '**/?(*.)+(spec|test).+(ts|js)'
  ],

  // 使用 Babel 进行 JavaScript 和 TypeScript 的转译
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
    '^.+\\.(js)$': 'babel-jest'
  },

  // 配置测试覆盖率报告
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],

  // 自动清理模拟对象
  clearMocks: true,
}
