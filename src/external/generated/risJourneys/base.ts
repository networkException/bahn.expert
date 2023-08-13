/* tslint:disable */
/* eslint-disable */
/**
 * RIS::Journeys
 * ## Info  * member of the **[RIS-API](https://db-planet.deutschebahn.com/pages/reisendeninformation-ris-api)** family * powered by [T.R Reisendeninformation](https://db-planet.deutschebahn.com/pages/reisendeninformation/apps/content/willkommen)  ## Capabilities  ### Journey-Information  Provides detailed information for a particular journey [Fahrt], including:  * transport type [Produktklasse], category [Fahrtgattung], line [Linie], administration [Verwaltung] and operator [Betreiber] * origin [Starthalt] and destination [Zielhalt] * departures [Abfahrten] or arrivals [Ankünfte] (depending on board) with schedule [Soll] and forecast [Vorschau] times and platforms [Plattform / Gleis / Bussteig etc.] * canceled stops [Haltausfall], additional stops [Zusatzhalt], canceled additional stops [zurückgenommene Zusatzhalte] additional textual information [Freitexte] and possible restrictions on changing passengers [Fahrgastwechsel] and on demand stops [Bedarfshalt] * references to other transports representing replacement [Ersatz], relief [Entlastung], travels with [Vereinigung] including separatation at [Trennung in] and continuation [Durchbindung] * disruptions [Störungen] for journey, arrivals and departures * information on replacement transports [SEV] * journeys message [Freitexte / Verspätungsbegründung] and direction-texts [Richtungstexte] * and much more  The consumer can choose a segment based [Fahrtabschnittsbasiert] or an event based [Fahrtereignisbasiert] view.  ### Journey-Searches  Powerful search functionallity for finding journeys by their journey-relation [fachliche Fahrt-Relation] or a mix of attributes like  * journey number [Fahrtnummer] * journey administration [Verwaltung] * journey line [Linienname] * and much more  ### Asynchronous change-notifications  The RIS-API event-system [RIS::Events](https://db-planet.deutschebahn.com/pages/reisendeninformation-ris-api/apps/content/events) can be used to get push-notifications in case information within RIS::Journeys changes. This enables use-cases like:  * refreshing ui in case information changes * doing something in your backend in case information changes * caching information and invalidate cache in case information changes  ## Limitations / Known Issues  * journeys are limited to 22h ahead  ## Getting Started  * get to know the vision behind [RIS-API](https://db.de/ris-api) * visit our [documentation](https://ris.gitpages.tech.rz.db.de/risapi/documentation/), learn how to [get started with openapi](https://ris.gitpages.tech.rz.db.de/risapi/documentation/05_Coding-Dojo/020_getting_started_openapi.html) or how to [get started with asyncapi](https://ris.gitpages.tech.rz.db.de/risapi/documentation/05_Coding-Dojo/030_getting_started_asyncapi.html) and check out our [coding-examples](https://ris.gitpages.tech.rz.db.de/risapi/documentation/05_Coding-Dojo/040_examples.html)
 *
 * The version of the OpenAPI document: 1.3.1
 * Contact: ris-fachbetrieb@deutschebahn.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';

export const BASE_PATH =
  'https://apis.deutschebahn.com/db/apis/ris-journeys/v1'.replace(/\/+$/, '');

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ',',
  ssv: ' ',
  tsv: '\t',
  pipes: '|',
};

/**
 *
 * @export
 * @interface RequestArgs
 */
export interface RequestArgs {
  url: string;
  options: AxiosRequestConfig;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
  protected configuration: Configuration | undefined;

  constructor(
    configuration?: Configuration,
    protected basePath: string = BASE_PATH,
    protected axios: AxiosInstance = globalAxios,
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.basePath = configuration.basePath || this.basePath;
    }
  }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
  name: 'RequiredError' = 'RequiredError';
  constructor(
    public field: string,
    msg?: string,
  ) {
    super(msg);
  }
}
