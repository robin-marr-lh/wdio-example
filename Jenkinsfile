node {
  stage('clone') {
    wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
      git branch: 'master', credentialsId: '7ca61f54-04f0-4447-860f-a5917ee5cbae', poll: false, url: 'git@github.com:robin-marr-lh/wdio-example.git'
    }
  }

  stage('install') {
    wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
      nodejs(nodeJSInstallationName: 'NodeJS 7.10.0') {
        sh 'npm install'
        sh 'npm run clean'
      }
    }
  }

  try {
    stage('lint') {
      wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
        nodejs(nodeJSInstallationName: 'NodeJS 7.10.0') {
          sh 'npm run report:lint'
        }
      }
    }

    stage('test') {
      wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
        nodejs(nodeJSInstallationName: 'NodeJS 7.10.0') {
          sh 'npm test'
        }
      }
    }
  } finally {
    stage('report') {
      wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
        nodejs(nodeJSInstallationName: 'NodeJS 7.10.0') {
          sh 'npm run report:allure'
          publishHTML(
            target: [
              allowMissing         : false,
              alwaysLinkToLastBuild: false,
              keepAll              : true,
              reportDir            : 'reports/allure',
              reportFiles          : 'index.html',
              reportName           : "Allure Report"
            ]
          )
          publishHTML(
            target: [
              allowMissing         : false,
              alwaysLinkToLastBuild: false,
              keepAll              : true,
              reportDir            : 'reports/linting',
              reportFiles          : 'index.html',
              reportName           : "Linting Report"
            ]
          )
        }
      }
    }
  }
}
