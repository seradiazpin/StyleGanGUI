import dnnlib.tflib as tflib
import config
import generate_figures as gf
import os
import random
import numpy as np

#Web Helper
import eel

@eel.expose
def mixing(seed1, seed2, styles= [12]):
    if(seed1 == ''):
        seed1 = random.randint(1,1000)
    else:
        seed1 = np.int64(seed1)
    if(seed2 == ''):
        seed2 = random.randint(1,1000)
    else:
        seed2 = np.int64(seed2)
    
    styles = [4,5,6]
    print(styles)
    gf.generate_mix('web/images/generated', 'mixin.png', 64, 64, seed1, seed2,styles)

@eel.expose
def generate_new(seed1):
    if(seed1 == ''):
        seed1 = random.randint(1,1000)
    else:
        seed1 = np.int64(seed1)
    gf.generate_new('web/images/generated', 'Generated.png',64, 64, seed1)

@eel.expose
def generate_grid():
    gf.generate_grid('web/images/generated', 'grid.png',64, 64, 16)

@eel.expose
def generate_trick():
    gf.generate_trick('web/images/generated', 'trick.png',64, 64,8)

def main():
    tflib.init_tf()
    gf.set_url_model("results/00004-sgan-poke-1gpu/network-snapshot-015204.pkl")
    os.makedirs(config.result_dir, exist_ok=True)
    
    eel.init('web')

    
    eel.start('index.html')
    print("This is now after start")
#----------------------------------------------------------------------------

if __name__ == "__main__":
    main()