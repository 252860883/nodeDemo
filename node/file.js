const fs=require('fs');

// 小文件拷贝
function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
    // 大文件拷贝情况下，通过数据流拷贝，可以理解为一桶水顺着水管流入另一个桶
    // fs.createReadStream(src).pipe(fs.createWriteStream(dst)); 
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.slice(2));