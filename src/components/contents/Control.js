import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Container } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import { Outlet } from "react-router-dom";
import { CreditCard, Lock, Person, Tune } from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

function LinkTab(props) {
  return (
    <Tab
      icon={props.icon}
      iconPosition="start"
      sx={{ ml: 0, mr: 2, minHeight: false, fontSize: 12, fontWeight: 600 }}
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function Control() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ width: 936, margin: "auto", overflow: "hidden" }}>
      <Typography sx={{ mb: 2 }} color="text.dark" variant="h6">
        Settings
      </Typography>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
          m: 0,
          p: 0,
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent sx={{ fontSize: 12, pt: 1.1 }}>
            Online
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <Box sx={{ width: "100%", m: 0, p: 0, mb: 2 }}>
        <Tabs
          sx={{ ml: 0, minHeight: "36px" }}
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          TabIndicatorProps={{
            sx: { bgcolor: "#2196f3", borderRadius: 0 },
          }}
        >
          <LinkTab
            icon={<Person />}
            label="STATUS"
            href="/dashboard/control/content"
          />
          <LinkTab icon={<Tune />} label="CONTROL" />
          <LinkTab icon={<Lock />} label="SECURITY" />
          <LinkTab icon={<CreditCard />} label="ABOUT" />
        </Tabs>
      </Box>
      <Outlet />
    </Container>
  );
}

export default Control;
