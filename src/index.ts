import alfy from 'alfy';

const setTodo = (input: string) => {
  const api_key = process.env.API_TOKEN;
  if (!api_key) {
    return alfy.output([
      {
        title: 'ERROR: API_TOKEN is not set',
        subtitle: '',
        arg: '',
        icon: { path: alfy.icon.error },
      },
    ]);
  }
  alfy.output([
    {
      title: 'Add Todoist',
      subtitle: '',
      arg: alfy.input,
      variables: {
        apikey: api_key,
      },
    },
  ]);
};

setTodo(alfy.input);
