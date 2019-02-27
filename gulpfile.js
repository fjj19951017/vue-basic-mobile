const gulp = require('gulp');
const GulpSSH = require('gulp-ssh');

const sitConfig = {
    ssh: {
        host: '{{cdnHost}}',
        port: 22,
        username: '{{cdnUserName}}',
        password: '{{cdnPassword}}'
    },
    remotePath: '{{cdnRemotePath}}',
}

gulp.task('remove', () => {
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
})

gulp.task('deploy', () => {
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