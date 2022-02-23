import handlebars from 'handlebars';

interface IVariable {
  [key: string]: string | number;
}
interface IParseMail {
  template: string;
  variables: IVariable;
}

export class HandlebarsMailTemplate {
  public async parse({ template, variables }: IParseMail): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}
