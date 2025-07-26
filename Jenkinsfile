pipeline {
  agent any

  parameters {
    choice(name: 'APP_NAME', choices: ['app1', 'app2', 'app3'], description: 'Select the application to deploy')
  }

  environment {
    DOCKER_IMAGE = "zorothehunter/${params.APP_NAME}"
    K8S_NAMESPACE = "default"
  }

  stages {

    stage('Clone Repository') {
      steps {
        git branch: 'main', url: 'https://github.com/Shravani1603/DevOps-MultiApp-Project.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        dir("${params.APP_NAME}") {
          sh "docker build -t ${DOCKER_IMAGE} ."
        }
      }
    }

    stage('Push to Docker Hub') {
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh """
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push ${DOCKER_IMAGE}
          """
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh "kubectl apply -f ${params.APP_NAME}/${params.APP_NAME}-deployment.yaml -n ${K8S_NAMESPACE}"
      }
    }
  }

  post {
    success {
      echo "✅ Deployment of ${params.APP_NAME} was successful!"
    }
    failure {
      echo "❌ Deployment failed. Check logs for ${params.APP_NAME}."
    }
  }
}
