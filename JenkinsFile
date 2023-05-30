pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Checkout source code from version control system
                git 'https://github.com/your-repo/shopping-cart.git'

                // Build and package the backend
                dir('backend') {
                    sh 'pip install -r requirements.txt'
                    sh 'python setup.py install'
                }

                // Build and package the frontend
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                // Run backend tests
                dir('backend') {
                    sh 'python manage.py test'
                }

                // Run frontend tests
                dir('frontend') {
                    sh 'npm run test'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Deploy the application using Docker Compose
                sh 'docker-compose up -d'
            }
        }
    }
}
