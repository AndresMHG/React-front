import React from 'react';
import { MdAssignmentInd } from "react-icons/md";
import { MdModeEdit, MdSettingsApplications, MdDescription, MdOfflinePin  } from "react-icons/md";

export const SidebarData = [
  {
    title: 'Cadastro',
    path: '/cadastro',
    icon: <MdAssignmentInd />,
    cName: 'nav-text',
      subNav: [
        {
          title: 'Setor',
          path: '/cadastro/setor',
          icon: <MdDescription />
        },
        {
          title: 'Localidades',
          path: '/cadastro/localidades',
          icon: <MdDescription />
        },
        {
          title: 'Empresa',
          path: '/cadastro/empresa',
          icon: <MdDescription />
        },
        {
          title: 'Perfil',
          path: '/cadastro/perfil',
          icon: <MdDescription />
        },
        {
          title: 'Usuário',
          path: '/cadastro/usuario',
          icon: <MdDescription />
        }
      ]
  },
  {
    title: 'Premissões',
    path: '/permissao',
    icon: <MdModeEdit />,
    cName: 'nav-text',
  },
  /*
  {
    title: 'Documentação',
    path: '/referencia',
    icon: <MdDescription />,
    cName: 'nav-text',

    subNav: [
      {
        title: 'Templates',
        path: '/referencia/templates',
        icon: <MdDescription />
      },
      {
        title: 'Intruçoes Técnicas',
        path: '/referencia/intruçoes',
        icon: <MdDescription />
      },
      {
        title: 'Procedimentos Operacionais',
        path: '/referencia/procedimentos',
        icon: <MdDescription />
      },
      {
        title: 'Normas Técnicas',
        path: '/referencia/normas',
        icon: <MdDescription />
      },
      {
        title: 'Tutorial utilização SIGO',
        path: '/referencia/tutorial',
        icon: <MdDescription />
      }
    ]
  },
  {
    title: 'Timeline Porfólio',
    path: '/porfolio',
    icon: <MdOfflinePin />,
    cName: 'nav-text',

    subNav: [
      {
        title: 'Acompanhamento Contratual',
        path: '/porfolio/acompanhamento',
        icon: <MdOfflinePin />
      },
      {
        title: 'Dados para Escritório de Projectos',
        path: '/porfolio/projectos',
        icon: <MdOfflinePin />
      }
    ]
  },
  {
    title: 'Projeto A',
    path: '/projeto',
    icon: <MdSettingsApplications />,
    cName: 'nav-text'
  } */
];