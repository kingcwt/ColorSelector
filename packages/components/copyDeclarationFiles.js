const fs = require('fs');
const path = require('path');
const glob = require('glob');

const sourceDir = path.join(__dirname, 'es');
const targetDir = path.join(__dirname, 'lib');

// 查找es目录下所有的.d.ts文件
const declarationFiles = glob.sync('**/*.d.ts', {
  cwd: sourceDir,
  absolute: true,
});

// 创建lib目录
fs.mkdirSync(targetDir, { recursive: true });

// 复制.d.ts文件到lib目录
declarationFiles.forEach((file) => {
  const targetFile = path.join(targetDir, path.relative(sourceDir, file));
  fs.copyFileSync(file, targetFile);
});

console.log('Declaration files copied from es to lib.');
