angular.module('acroApp', ['ui.bootstrap']);

function TypeaheadCtrl($scope) {
    $scope.selected = undefined;
    $scope.acronym = ['AACOM', 'AAHC', 'AAMA', 'AAMC', 'AAOMS', 'AART'];
    $scope.association  = ['American Association of Colleges of Osteopathic Medicine', 'Association of Academic Health Centers', 'American Association of Medical Assistants', 'Association of American Medical Colleges', 'American Association of Oral and Maxillofacial Surgery', 'American Registry of Radiologic Technologists'];
}