export function DisableAnimateDirective(
    $animate
) {
    'ngInject';

    const directive = {
        restrict: 'A',
        replace: true,
        link: linkFunction,
    };

    return directive;


    /**
     * Link
     */
    function linkFunction($scope, $element, $attrs, vm) {

        // Disable $animate for this element
        $animate.enabled($element, false);

    }

}

