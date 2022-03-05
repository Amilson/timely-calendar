/* eslint-disable arrow-parens */
/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
import { ServiceCredentials } from 'app/interfaces';
import { DecoratorsUtils } from 'app/core/utils';

export function CoreServiceConstructor() {
  return target => {
    Object.entries(target.prototype).forEach(([key, value]) => {
      const method = target.prototype[key];
      if (key !== 'constructor') {
        target.prototype[key] = function(...args: any[]) {
          const context = this;
          if (DecoratorsUtils.hasServiceAndHandlingProperties(context)) {
            context.mainService.handlingService.clearAll();
          }
          const result = method.apply(context, args);
          return result;
        };
      }
    });
    return target;
  };
}

export function CoreServiceLog(tp: string) {
  return function(
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const method = propertyDescriptor.value;
    propertyDescriptor.value = function(...args: any[]) {
      const params = args
        .map(a => {
          return JSON.stringify(a);
        })
        .join();
      const result = method.apply(this, args);
      const r = JSON.stringify(result);
      console.log(`Call: ${propertyName}(${params}) => ${r}`);
      return result;
    };

    return propertyDescriptor;
  };
}

export function CoreServiceClearDecorators() {
  return function(
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function(...args: any[]) {
      const context = this;
      if (DecoratorsUtils.hasServiceAndHandlingProperties(context)) {
        context.mainService.handlingService.clearAll();
      }
      const result = method.apply(context, args);
      return result;
    };

    return propertyDescriptor;
  };
}

export function CoreService(params: ServiceCredentials) {
  return function(
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function(...args: any[]) {
      const context = this;
      if (DecoratorsUtils.hasServiceAndHandlingProperties(context)) {
        context.mainService.handlingService.clearAll();
        context.mainService.handlingService.setServiceCredentials(params);
      }
      const result = method.apply(context, args);
      return result;
    };

    return propertyDescriptor;
  };
}
