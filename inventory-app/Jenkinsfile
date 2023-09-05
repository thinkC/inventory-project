pipeline {
   agent any

   stages {
      stage('Verify Branch') {
         steps {
            echo "$GIT_BRANCH"
         }
      }
       stage('Docker Build') {
        steps {
        pwsh(script: 'docker images -a')
        pwsh(script: """
        cd inventory-project/inventory-app/
        docker images -a
        docker build -t inventoryfrnt .
        docker images -a
        cd ..

        """)
        }
      }
}

}
