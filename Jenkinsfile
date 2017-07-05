node {
  stage('Install') {
    wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
      nodejs(nodeJSInstallationName: 'NodeJS 7.10.0') {
        sh 'npm install'
        sh 'npm run clean'
      }
    }
  }

  try {
    stage('Test') {
      wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
        nodejs(nodeJSInstallationName: 'NodeJS 7.10.0') {
          sh 'npm test'
        }
      }
    }
  } catch (error) {
    stage('Report') {
      wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
        nodejs(nodeJSInstallationName: 'NodeJS 7.10.0') {
          sh 'npm run report'
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
    throw error
  }
}
