pipeline {
    agent any
    environment {
        IMAGE_NAME = 'flourish-bread'
        CONTAINER_NAME = 'flourish-bread-app'
        HOST_PORT = '3001'
    }
    stages {
        stage('Build Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} -t ${IMAGE_NAME}:latest .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker stop ${CONTAINER_NAME} || true'
                sh 'docker rm ${CONTAINER_NAME} || true'
                sh 'docker run -d --name ${CONTAINER_NAME} -p ${HOST_PORT}:3000 --restart unless-stopped ${IMAGE_NAME}:latest'
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker image prune -f'
            }
        }
    }
    post {
        failure {
            echo 'Build failed!'
        }
        success {
            echo "Deployed to http://localhost:${HOST_PORT}"
        }
    }
}
