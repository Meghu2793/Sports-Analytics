import scipy as sc
import numpy as np
import pandas as pd
import ijson, json
import requests, base64
from pandas.io.json import json_normalize
import nba_py
from nba_py import *
from nba_py import league,game,DataFrame,constants,draftcombine,League,player,Scoreboard,team,shotchart,TODAY
from nba_py.player import get_player
from nba_py.constants import *
from nba_py.shotchart import *
from nba_py.draftcombine import *
from nba_py.game import *
from nba_py.shotchart import *
from nba_py.league import *
from nba_py.league import GameLog,PlayerSpeedDistanceTracking
from itertools import islice
import datetime
from joblib import Parallel, delayed
import multiprocessing
import sys


def get_player_IDs():
    l = league.PlayerStats(season='2016-17')
    df = l.overall()
    player_id = ({"Player_ID":df.PLAYER_ID,"Player":df.PLAYER_NAME})
    
    return player_id

def get_player_shot_tracking_overall(id_list):
    res = [ ]
    player_shot_tracking_overall = {}
    for i in id_list:
        overall = player.PlayerShotTracking(player_id=i).overall().fillna(0)
        key = str(i)
        value = {}
        value.update({"PLAYER_NAME_LAST_FIRST":(str(overall["PLAYER_NAME_LAST_FIRST"].values[0].replace("'", '"'))),\
                      "FG2_PCT":(float(overall[["FG2_PCT"]].values[0])),\
                      "FG3_PCT":(float(overall[["FG3_PCT"]].values[0]))})
        res.append(({key:value}))
        player_shot_tracking_overall.update({key:value})
    print(res)
    sys.stdout.flush()

players = get_player_IDs()
ID_list =  list(players["Player_ID"])

get_player_shot_tracking_overall(ID_list[1:20],)