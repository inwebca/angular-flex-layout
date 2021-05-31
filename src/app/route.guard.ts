import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {GriGraphqlService} from './generatedgraphql/graphql-services';
import {map} from 'rxjs/operators';
import {SurveyStates} from './generatedgraphql/graphql-types';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  surveyStateObs$: Observable<SurveyStates>;

  constructor(private router: Router, private readonly gql: GriGraphqlService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.surveyStateObs$ = this.gql.getDriverSurveyState({driverEmployeId: 1}).pipe(map(x => x.data.driverSurveyState.state));

    this.surveyStateObs$.subscribe(value => {
      if (value === SurveyStates.Survey.toString()){
        this.router.navigateByUrl('/driver-survey');
      }else{
        this.router.navigateByUrl('/driver-trips');
      }
    });


    return true;
  }

}
