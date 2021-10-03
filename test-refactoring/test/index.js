const data = [
  {folder: 'sidebar root folder', indexFile: 'sidebar root indexFile'},
  'rootfile1.hr',
  'rootfile2.jpg',
  {files: [
      {folder: 'sidebar/subfiles', indexFile: 'subfile indexFile'},
      'subfile1.pr',
      'subfile2.ts',
      'subfile3.ts',
      {files: [
          {folder: 'sidebar/subsubfiles', indexFile: 'subsubfile indexFile'},
          'subsubfile1.pr',
          'subsubfile2.ts',
          'subsubfile3.ts',
        ]}
    ]}
];

const arr = {};


const removeExtension = (str) => {
  return str.replace(/\..+/, '');
};

const checkFileNameExist = file => {
  return typeof file === 'string' || file.indexFile;
}

const searchFiles = (rootFolder) => {
  let folder = '';
  rootFolder.forEach(file => {

    //save folder Name
    if (file.folder) {
      folder = file.folder;
    }

    const fileName = typeof file === 'string' ? file : file.indexFile;


    if (checkFileNameExist(file)) {
      arr[folder + '/' + fileName] = removeExtension(fileName);
    }

    if (file?.files?.length) {
      searchFiles(file.files);
    }
  })
}

searchFiles(data);

console.log(arr);

console.log(data.includes('rootfile1.hr'))
