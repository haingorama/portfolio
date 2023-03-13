#!/bin/bash


game_running=true
room_number=2


while [ "$game_running" = true ]
do
    if [ $room_number -eq 1 ] # On se trouve dans la pièce 1.
    then        
        echo "There are 2 doors in your room: (n)orth, (e)ast, where do you want to go ?"
        read choice
        if [ "$choice" = "n" ] # n pour si tu vas au nord
        then
            clear
            echo " You choose the north"
            room_number=4  # on se retrouve dans la pièce 4 et tu meurs (X_X)
        elif [ "$choice" = "e" ] # ou si tu vas à l'est
        then
            clear
            echo " You choose the east"
            room_number=2  # retourne au point de départ
        else # tu tapes n'importe quoi tu tombes sur le message çi-dessous
            echo " THIS CHOICE DOESN'T EXIST"
    fi  # Fin du des choix pour la pièce 1.
    elif [ $room_number -eq 2 ] # Les choix quand on est dans la pèce 2.
    then
        echo "There are 3 doors in your room: (n)orth, (e)ast, (w)est, where do you want to go ?"
        read choice # lire le choix de commande
        if [ "$choice" = "n" ]
        then
            clear
            echo " You choose the north"
            room_number=5 # beh on se retrouve dans la pièce 5
        elif [ "$choice" = "e" ]
        then
            clear
            echo " You choose the east"
            room_number=3 # à l'est c'est toujours pas la bonne pièce 
        elif [ "$choice" = "w" ]
        then
            clear
            echo " You choose the west"
            room_number=1 # tu te retrouves dans la pièce 1
        else
            echo "THIS CHOICE DOESN'T EXIST"
        fi # fin des choix possible de la pièce 2
    elif [ $room_number -eq 3 ] # my turn ^^ On est dans la pi_ce 3
    then
		clear
        echo "There are 2 doors in your room: (w)est or (n)orth, where do you want to go ?"
        read choice #  au nord c'est pièce 6 et à  l'ouest c'est pièce 2
        if [ "$choice" = "w" ]
        then
            clear
            echo " You choose the west"
            room_number=2 # retour à la case départ ha ha ha
        elif [ "$choice" = "n" ]
        then
            clear
            echo " You choose the north"
            room_number=6 # yeahhh la sortie est là
        else
            echo "THIS CHOICE DOESN'T EXIST"
        fi # fin de ma partie.
    elif [ $room_number -eq 4 ] # pas le choix t'es dans la mauvaise pièce
    then # donc >
			clear
			echo " You choose the bad one"
			game_running=false
    elif [ $room_number -eq 5] # my turn AGAIN Pièce 5
    then
		clear
        echo "There is 1 door in you room: (s)outh, do you want to go or ... ?"
        read choice # beh t'as pas vraiment le choix alors ...
        if [ "$choice" = "s"]
        then
            clear
            room_number=2 # encore et toujours au point de départ !
        else 
            echo "THIS CHOICE DOSN'T EXIST"
        fi
    elif [ $room_number -eq 6 ]    # the room > Pièce 6
    then
        echo ">>>>>>>>>>>>>>>>>>>>> You find the Exit <<<<<<<<<<<<<<<<<<<<<<<<<< "
		read choice											
        game_running=false #fin des choix et du jeu
    fi 
done # fini totalment ^u^

#END