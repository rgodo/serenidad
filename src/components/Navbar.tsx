'use client';

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useState } from "react";
import menuItems from "../data/menu.json";

const CONTACT_BUTTON_COLOR = "#8b9b42";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setDrawerOpen(false);
    }
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{
        top: 0,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 2, py: 1.5, maxWidth: '1440px', margin: 'auto', width: '100%' }} >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            cursor: "pointer",
          }}
          onClick={() => scrollToSection("hero")}
        >
          <Image
            src="/logo-serenidad.svg"
            alt="Serenidad Logo"
            width={163}
            height={61}
            priority
            style={{
              marginRight: 12,
              height: 61,
              width: 163,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          {menuItems.map((item) => (
            <Typography
              key={item.target}
              sx={{
                ml: 4,
                cursor: "pointer",
                fontWeight: 500,
                fontFamily: "Assistant, Arial, sans-serif",
                color: "#434343",
                transition: "color 0.2s",
                "&:hover": { color: '#E1952D' },
              }}
              onClick={() => scrollToSection(item.target)}
            >
              {item.label}
            </Typography>
          ))}
          <Button
            variant="contained"
            sx={{
              ml: 4,
              bgcolor: CONTACT_BUTTON_COLOR,
              color: "#fff",
              fontWeight: 700,
              fontFamily: "Assistant, Arial, sans-serif",
              textTransform: "none",
              borderRadius: 0,
              px: 3,
              boxShadow: "none",
              "&:hover": { bgcolor: "#7e8a38" },
            }}
            onClick={() => scrollToSection("contacto")}
          >
            ¡Contáctanos Ahora!
          </Button>
        </Box>

        {/* Mobile Hamburger */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: CONTACT_BUTTON_COLOR,
              color: "#fff",
              fontWeight: 500,
              fontFamily: "Assistant, Arial, sans-serif",
              textTransform: "none",
              borderRadius: 0,
              px: 2,
              boxShadow: "none",
              mr: 1,
              minWidth: "unset",
              "&:hover": { bgcolor: "#7e8a38" },
            }}
            onClick={() => scrollToSection("contacto")}
          >
            ¡Contáctanos Ahora!
          </Button>
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            aria-label="open menu"
            sx={{ border: "1px solid #e0e0e0", borderRadius: 0 }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: { backgroundColor: CONTACT_BUTTON_COLOR, width: 320 },
          }}
        >
          {/* Top Bar in Drawer */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              bgcolor: "#fff",
              alignItems: "center",
              px: 2,
              py: 1,
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <Image
              src="/logo-serenidad.png"
              alt="Serenidad Logo"
              width={125}
              height={60}
              style={{
                maxWidth: 125,
                maxHeight: 60,
                height: 60,
                width: 125,
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#8b9b42",
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                fontSize: 8,
                fontFamily: "Assistant, Arial, sans-serif",
                borderRadius: 0,
                px: 1,
                py: 1,
                minWidth: "unset",
                ml: 2,
                mr: 1,
                "&:hover": { bgcolor: "#7e8a38" },
                boxShadow: "none",
              }}
              onClick={() => scrollToSection("contacto")}
            >
              ¡Contáctanos Ahora!
            </Button>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{
                color: "#434343",
                border: "1px solid #e0e0e0",
                borderRadius: 0,
              }}
              aria-label="close menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.target} disablePadding>
                <ListItemButton
                  onClick={() => scrollToSection(item.target)}
                  sx={{
                    justifyContent: "center",
                    py: 2,
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      align: "center",
                      sx: {
                        color: "#fff",
                        fontWeight: 500,
                        fontSize: 18,
                        fontFamily: "Assistant, Arial, sans-serif",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
