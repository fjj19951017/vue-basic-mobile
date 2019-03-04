const fs = require('fs');
const gulp = require('gulp');
const GulpSSH = require('gulp-ssh');

const sitConfig = {
    ssh: {
        host: '{{cdnHost}}',
        port: 22,
        username: '{{cdnUserName}}',
        privateKey: fs.readFileSync('{{cdnPrivateKey}}'),
        passphrase: '{{cdnPassphrase}}'
    },
    remotePath: '{{cdnRemotePath}}',
}
const dangerPath = /(\/$)|(\*)/g;

gulp.task('remove', () => {
    if(!sitConfig.remotePath || dangerPath.exec(sitConfig.remotePath)) {
        console.log('remotePath is dangerous, refuse to execute \'remove\'');
        return;
    }
    const gulpSSH = new GulpSSH({
        ignoreErrors: false,
        sshConfig: sitConfig.ssh
    });
    console.log('removing remote files...');
    return gulpSSH.shell(`rm -rf ${sitConfig.remotePath}`, {filePath: 'commands.log'})
    .pipe(gulp.dest('logs'))
    .on('finish', () => {
        console.log('done.');
    });
});

gulp.task('deploy', () => {
    if(!sitConfig.remotePath || dangerPath.exec(sitConfig.remotePath)) {
        console.log('remotePath is dangerous, refuse to execute \'deploy\'');
        return;
    }
    const gulpSSH = new GulpSSH({
        ignoreErrors: false,
        sshConfig: sitConfig.ssh
    });
    return gulp.src('./dist/**')
    .pipe(gulpSSH.dest(sitConfig.remotePath))
    .on('finish', () => {
        console.log('done.');
    });
});