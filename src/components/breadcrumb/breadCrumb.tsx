import * as React from "react";

import Link, { LinkProps } from "@mui/material/Link";

import Typography from "@mui/material/Typography";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink, useLocation } from "react-router-dom";

const breadcrumbNameMap: { [key: string]: string } = {
  "/": "Home",
  "/chamados": "Chamados",
  "/tecnicos": "Técnicos",
  "/clientes": "Clientes",
};

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />;

export default function RouterBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb" color="white">
      <LinkRouter underline="hover" color="white" to="/">
        Home
      </LinkRouter>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography key={to}>{breadcrumbNameMap[to]}</Typography>
        ) : (
          <LinkRouter underline="hover" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
