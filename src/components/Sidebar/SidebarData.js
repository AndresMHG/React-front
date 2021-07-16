import React from 'react';
import { MdAssignmentInd } from "react-icons/md";
import { MdModeEdit, MdSettingsApplications, MdDescription, MdOfflinePin  } from "react-icons/md";

export const SidebarData = [
  {
    title: 'Cadastro de Usuários',
    path: '/protuario',
    icon: <MdAssignmentInd />,
    cName: 'nav-text',
      subNav: [
        {
          title: 'Controle de Acceso / Permissões',
          path: '/cadastro/permissoes',
          icon: <MdAssignmentInd />
        },
        {
          title: 'Documentação de Refêrencia',
          path: '/overview/revenue',
          icon: <MdAssignmentInd />
        }
      ]
  },
  {
    title: 'Controle de Acesso / Premissões',
    path: '/prescricao',
    icon: <MdModeEdit />,
    cName: 'nav-text',
    subNav: [
      {
        title: 'Controle de Acceso / Permissões',
        path: '/overview/users',
        icon: <MdModeEdit />
      },
      {
        title: 'Documentação de Refêrencia',
        path: '/overview/revenue',
        icon: <MdModeEdit />
      }
    ]
  },
  {
    title: 'Documentação de Referência',
    path: '/exames',
    icon: <MdDescription />,
    cName: 'nav-text',

    subNav: [
      {
        title: 'Templates',
        path: '/overview/users',
        icon: <MdDescription />
      },
      {
        title: 'Intruçoes Técnicas',
        path: '/overview/revenue',
        icon: <MdDescription />
      },
      {
        title: 'Procedimentos Operacionais',
        path: '/overview/revenue',
        icon: <MdDescription />
      },
      {
        title: 'Normas Técnicas',
        path: '/overview/revenue',
        icon: <MdDescription />
      },
      {
        title: 'Tutorial utilização SIGO',
        path: '/overview/revenue',
        icon: <MdDescription />
      }
    ]
  },
  {
    title: 'Timeline Porfólio',
    path: '/atestados',
    icon: <MdOfflinePin />,
    cName: 'nav-text',

    subNav: [
      {
        title: 'Acompanhamento Contratual',
        path: '/overview/users',
        icon: <MdOfflinePin />
      },
      {
        title: 'Dados para Escritório de Projectos',
        path: '/overview/revenue',
        icon: <MdOfflinePin />
      }
    ]
  },
  {
    title: 'Projeto A',
    path: '/presets',
    icon: <MdSettingsApplications />,
    cName: 'nav-text'
  }
];