import {AceEditorDirective} from './src/directive';
import {AceEditorComponent} from './src/component';
import {AceEditorModule} from './src/module';

export {AceEditorModule, AceEditorDirective, AceEditorComponent};

declare var ace: any;
ace.config.set('basePath', 'node_modules/ace-builds/src-min/');
