import { IFilterOption } from "../components/pages/workers_page/types/IFilterOption"

export const filterOptions: IFilterOption[] = [
  {
    option: { key: 'Position', value: "Должность" },
    type: 'radio',
    items: {
      Frontend: 'Фронтенд-разработчик',
      Backend: 'Backend-разработчик',
      Analyst: 'Аналитик',
      Manager: 'Менеджер',
      Designer: 'Дизайнер',
    }
  },
  {
    option: { key: "Gender", value: "Пол" },
    type: 'radio',
    items: {
      Male: "Мужской",
      Female: "Женский"
    }
  },
  {
    option: { key: 'Stack', value: 'Технологии' },
    type: 'checkbox',
    items: {
      CSharp: 'C#',
      React: 'React',
      Java: 'Java',
      PHP: 'PHP',
      Word: 'Word'
    }
  }
]