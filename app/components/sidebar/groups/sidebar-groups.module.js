import angular from 'angular';

import endpointGroup from './endpoint-group/endpoint-group.module';
import filterGroup from './filter-group/filter-group.module';
import graphSettingsGroup from './graph-settings-group/graph-settings-group.module';
import namespaceGroup from './namespace-group/namespace-group.module';
import selectionGroup from './selection-group/selection-group.module';

/**
 * @ngdoc module
 * @name components.sidebar.groups
 *
 * @description
 *
 * This module includes all groups for the sidebar accordion of the application.
 */
export default angular.module('sidebar.groups', [endpointGroup.name, 
                                                  filterGroup.name,
                                                  graphSettingsGroup.name,
                                                  namespaceGroup.name,
                                                  selectionGroup.name]);
